using ServiceManager.DTO;

namespace ServiceManager.Interface
{
    public interface ICustomerService
    {
        Task<IEnumerable<CustomerDTO.FullDetail>> GetCustomerList();

        Task<CustomerDTO.FullDetail> GetCustomerByID(Guid ID);

        Task<bool> AddCustomer(CustomerDTO.OnAdd input, string UserID);

        Task<bool> UpdateCustomer(Guid ID, CustomerDTO.OnUpdate input, string UserID);

        Task<bool> DeleteCustomer(Guid ID, string UserID);
    }
}
