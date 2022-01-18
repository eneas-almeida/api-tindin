const isIdValid = (id: string | undefined, service: string): boolean => {
    if (!id) {
        return false;
    }

    if (!service) {
        return false;
    }

    const mapRegex: any = {
        uuid: () => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
        mongo: () => /^[0-9a-fA-F]{24}$/,
        string: () => /^[0-9a-fA-F]{8}$/,
        hash: () => /^[0-9a-fA-F]{8}$/,
    };

    const existsRegex = mapRegex.hasOwnProperty(service);

    if (!existsRegex) {
        throw new Error('Error in helper id validator!');
    }

    const regex = mapRegex[service]();

    if (!regex.test(id)) {
        return false;
    }

    return true;
};

const isEmailValid = (email: string): boolean => {
    if (!email) {
        return false;
    }

    if (email.length > 256) {
        return false;
    }

    const tester =
        /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    if (!tester.test(email)) {
        return false;
    }

    const [account, address] = email.split('@');

    if (account.length > 64) {
        return false;
    }

    const domainParts = address.split('.');

    if (
        domainParts.some(function (part) {
            return part.length > 63;
        })
    ) {
        return false;
    }

    return true;
};

const isPasswordValid = (password: string): boolean => {
    if (!password) {
        return false;
    }

    if (password.length > 24) {
        return false;
    }

    const tester = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\])]).{8,}$/;

    if (!tester.test(password)) {
        return false;
    }

    return true;
};

export { isIdValid };
export { isEmailValid };
export { isPasswordValid };
