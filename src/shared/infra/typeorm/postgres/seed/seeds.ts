import { UserMongoRepository } from '@modules/users/infra/typeorm/mongo/repositories/UserMongoRepository';
import { BcryptHashProvider } from '@modules/users/providers/HashProvider/implements/BcryptHashProvider';
import { connectService } from '../../';
import { users } from '../../data/users';

const main = async () => {
    const connection = await connectService('mongodb');

    const { gererateHash } = new BcryptHashProvider();

    const userRepository = new UserMongoRepository();

    for (const user of users) {
        const existsSchema = await userRepository.findOneByEmail(user.email);

        if (!existsSchema) {
            Object.assign(user, { password: await gererateHash(user.password) });

            await userRepository.create(user);
        }
    }

    connection.close();
};

main()
    .then((e) => {
        console.log(`Finalized!`);
    })
    .catch((e) => {
        console.log(`Error in create seed!`);
        console.log(e);
    });
