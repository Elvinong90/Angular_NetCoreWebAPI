using System.ComponentModel.DataAnnotations;

namespace ServiceManager.DTO
{
    public class ProductDTO
    {
        public class Identity
        {
            public Guid ID { get; set; }
        }

        public class Detail
        {
            [Required]
            [Display(Name = "Product No")]
            public string ProductNo { get; set; }

            [Required]
            public string Description { get; set; }

            [Required]
            public decimal Price { get; set; }
        }
        
        public class FullDetail : Identity
        {
            public Detail Detail { get; set; }
        }

        public class OnAdd : Detail { }

        public class OnUpdate: Detail { }
        
    }
}
