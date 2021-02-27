using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using TespApp.Models;

namespace TespApp.Controllers
{
    public class UsersController : Controller
    {
        private readonly ILogger<UsersController> _logger;

        public UsersController(ILogger<UsersController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            List<UsersIndexViewModel> model = new List<UsersIndexViewModel>();
            model.Add(new UsersIndexViewModel("jrios", "Jesus", "Rios", "jrios@gmail.com", 29, DateTime.Now.Date.AddDays(-15), true));
            model.Add(new UsersIndexViewModel("jrios2", "Jesus2", "Rios2", "jrios2@gmail.com", 32, DateTime.Now.Date.AddDays(-10), true));
            model.Add(new UsersIndexViewModel("jrios3", "Jesus3", "Rios3", "jrios3@gmail.com", 18, DateTime.Now.Date.AddDays(-4), false));
            model.Add(new UsersIndexViewModel("jrios4", "Jesus4", "Rios4", "jrios4@gmail.com", 30, DateTime.Now.Date.AddDays(-5), true));
            model.Add(new UsersIndexViewModel("jrios5", "Jesus5", "Rios5", "jrios5@gmail.com", 25, DateTime.Now.Date.AddDays(-2), false));
            model.Add(new UsersIndexViewModel("jrios6", "Jesus6", "Rios6", "jrios6@gmail.com", 40, DateTime.Now.Date.AddDays(-8), true));

            return View(model);
        }

    }
}
