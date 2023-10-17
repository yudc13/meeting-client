import { request } from '@umijs/max';

/**
 * 查询用户列表
 * @param data
 * @returns
 */
export async function getUserList(data: API.TableParams<Partial<UserApi.User>>) {
  return request<API.TableResponse<UserApi.User>>('/api/user', {
    method: 'POST',
    data,
  });
}
