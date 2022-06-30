using RepositoryManager.Interface;
using DataManager.Models;
using DataManager;
using Microsoft.Extensions.Logging;

namespace RepositoryManager.Repository
{
    public class TransactionRepository : GenericRepository<Transaction>, ITransactionRepository
    {
        public TransactionRepository(DBContext context, ILogger logger) : base(context, logger) { }

    }
}
