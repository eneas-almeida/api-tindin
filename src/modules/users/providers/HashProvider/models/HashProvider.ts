export interface HashProvider {
    gererateHash(payload: string): Promise<string>;

    compareHash(payload: string, hashed: string): Promise<boolean>;
}
