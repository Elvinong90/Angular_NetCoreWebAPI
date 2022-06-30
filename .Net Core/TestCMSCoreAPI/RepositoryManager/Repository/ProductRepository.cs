using RepositoryManager.Interface;
using DataManager.Models;
using DataManager;
using Microsoft.Extensions.Logging;

namespace RepositoryManager.Repository
{
    public class ProductRepository : GenericRepository<Product>, IProductRepository
    {
        public ProductRepository(DBContext context, ILogger logger) : base(context, logger) { }

    }
}
