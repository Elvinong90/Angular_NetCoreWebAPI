using RepositoryManager.Interface;
using DataManager.Models;
using DataManager;
using Microsoft.Extensions.Logging;

namespace RepositoryManager.Repository
{
    public class CustomerRepository : GenericRepository<Customer>, ICustomerRepository
    {
        public CustomerRepository(DBContext context, ILogger logger) : base(context, logger) { }

    }
}
