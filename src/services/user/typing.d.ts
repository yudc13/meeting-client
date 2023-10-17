declare namespace UserApi {
  enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN'
  }
  type User = {
    id: number;
    email: string;
    nickname: string;
    role: UserRole;
    avatar: string;
    updateAt: string;
    createAt: string;
  }
}
