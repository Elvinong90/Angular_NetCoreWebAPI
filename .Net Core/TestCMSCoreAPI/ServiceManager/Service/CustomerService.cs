using AutoMapper;
using DataManager.Models;
using RepositoryManager;
using ServiceManager.DTO;
using ServiceManager.Interface;

namespace ServiceManager.Service
{
    public class CustomerService : ICustomerService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public CustomerService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<IEnumerable<CustomerDTO.FullDetail>> GetCustomerList()
        {
            var customers = await _unitOfWork.Customers.GetAll();
            var customerDTOs = _mapper.Map<IEnumerable<CustomerDTO.FullDetail>>(customers);
            return customerDTOs;
        }

        public async Task<CustomerDTO.FullDetail> GetCustomerByID(Guid ID)
        {
            var customer = await _unitOfWork.Customers.GetById(ID);
            var customerDTO = _mapper.Map<CustomerDTO.FullDetail>(customer);
            return customerDTO;
        }

        public async Task<bool> AddCustomer(CustomerDTO.OnAdd input, string UserID)
        {
            var customer = _mapper.Map<Customer>(input);

            customer.ID = Guid.NewGuid();
            customer.Deleted = false;
            customer.CreatedBy = UserID;
            customer.DateCreated = DateTime.UtcNow;
            
            _unitOfWork.Customers.Add(customer);
            int result = await _unitOfWork.Commit();

            return Convert.ToBoolean(result);
        }

        public async Task<bool> UpdateCustomer(Guid ID, CustomerDTO.OnUpdate input, string UserID)
        {
            var customer = await _unitOfWork.Customers.GetById(ID);

            customer.FullName = input.FullName;
            customer.IDType = input.IDType;
            customer.IDNo = input.IDNo;
            customer.ModifiedBy = UserID;
            customer.DateModified = DateTime.UtcNow;

            _unitOfWork.Customers.Update(customer);
            int result = await _unitOfWork.Commit();

            return Convert.ToBoolean(result);
        }

        public async Task<bool> DeleteCustomer(Guid ID, string UserID)
        {
            var customer = await _unitOfWork.Customers.GetById(ID);

            _unitOfWork.Customers.Delete(customer);
            int result = await _unitOfWork.Commit();

            return Convert.ToBoolean(result);
        }
    }
}
