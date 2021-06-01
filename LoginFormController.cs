using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ViewModel;
using BusinessRepository;

namespace KratinPro.Controllers
{
    public class LoginFormController : Controller
    {
        // GET: LoginForm
        Repository repository = new Repository();
        public ActionResult ManageLoginPage()
        {
            return View();
        }
        [HttpPost]
        public JsonResult LoginUser(VMUserInfo vmAddUser)
        {
            bool Response;
            try
            {
                Session["UserInfoId"] = vmAddUser.UserInfoId.ToString();
                Session["FirstName"] = vmAddUser.FirstName.ToString();
                Response = repository.LoginUser(vmAddUser);
            }
            catch (Exception ex)
            {

                Response = false;
            }
            return Json(Response);
        }
    }
}