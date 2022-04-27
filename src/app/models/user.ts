export class User {
    constructor(
        public userId: string,
        public userName: string,
        public emailAddress: string,
        public password: string,
        public data: any
    ) { }
}
