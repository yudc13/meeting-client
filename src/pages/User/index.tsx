import {useProTableRequest} from '@/hooks';
import {getUserList} from '@/services/user';
import {PageContainer, ProColumns, ProTable} from '@ant-design/pro-components';
import {UserOutlined} from '@ant-design/icons';

const User = () => {
  const {request, options} = useProTableRequest(getUserList);
  const columns: ProColumns<UserApi.User, 'text'>[] = [
    {title: '用户昵称', dataIndex: 'nickname'},
    {
      title: '用户头像',
      dataIndex: 'avatar',
      valueType: 'image',
      search: false,
      fieldProps: {width: 28, height: 28, placeholder: <UserOutlined/>}
    },
    {title: '用户邮箱', dataIndex: 'email'},
    {title: '创建时间', dataIndex: 'createAt', valueType: 'dateTime'},
    {title: '更新时间', dataIndex: 'updateAt', valueType: 'dateTime'},
  ]
  return (
    <PageContainer title={false}>
      <ProTable<UserApi.User, Partial<UserApi.User>>
        rowKey={'id'}
        columns={columns}
        request={request}
        options={options}
      />
    </PageContainer>
  )
}

export default User
