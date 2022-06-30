using RepositoryManager.Interface;

namespace RepositoryManager
{
    public  interface IUnitOfWork
    {
        ICustomerRepository Customers { get; }
        IProductRepository Products { get; }
        ITransactionRepository Transactions { get; }

        Task<int> Commit();
    }
}
