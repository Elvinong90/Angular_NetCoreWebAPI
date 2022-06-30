using RepositoryManager.Interface;
using RepositoryManager.Repository;
using DataManager;
using Microsoft.Extensions.Logging;

namespace RepositoryManager
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly DBContext _context;
        private readonly ILogger _logger;

        public ICustomerRepository Customers { get; private set; }
        public IProductRepository Products { get; private set; }
        public ITransactionRepository Transactions { get; private set; }

        public UnitOfWork(DBContext context, ILoggerFactory loggerFactory)
        {
            _context = context;
            _logger = loggerFactory.CreateLogger("logs");

            Customers = new CustomerRepository(_context, _logger);
            Products = new ProductRepository(_context, _logger);
            Transactions = new TransactionRepository(_context, _logger);
        }

        public async Task<int> Commit()
        {
            int result = 0;

            using(var transaction = _context.Database.BeginTransaction())
            {
                try
                {
                    result = await _context.SaveChangesAsync();
                    transaction.Commit();

                }
                catch (Exception ex)
                {
                    _logger.LogError(ex, "Commit Error", typeof(UnitOfWork));
                    transaction.Rollback();
                }
                
            }

            return result;
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
