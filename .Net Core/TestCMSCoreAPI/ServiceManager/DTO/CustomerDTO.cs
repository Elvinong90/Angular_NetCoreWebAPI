using System.ComponentModel.DataAnnotations;

namespace ServiceManager.DTO
{
    public class CustomerDTO
    {
        public class Identity
        {
            public Guid ID { get; set; }
        }

        public class Detail
        {
            [Required]
            [Display(Name = "Customer ID")]
            public string CustomerID { get; set; }

            [Required]
            [Display(Name = "Full Name")]
            public string FullName { get; set; }

            [Required]
            [Display(Name = "ID Type")]
            public string IDType { get; set; }

            [Required]
            [Display(Name = "ID No")]
            public string IDNo { get; set; }
        }

        public class FullDetail : Identity
        {
            public Detail Detail { get; set; }
        }

        public class OnAdd : Detail { }

        public class OnUpdate : Detail { }
    }
}
