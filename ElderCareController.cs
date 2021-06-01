using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ViewModel;
using BusinessRepository;


namespace KratinPro.Controllers
{
    public class ElderCareController : Controller
    {
        // GET: ElderCare
        Repository repository = new Repository();

        public ActionResult ElderCarePage()
        {

            if (Session["FirstName"] != null)
            {

                return View();
            }
            else
            {
                return Redirect("/LoginForm/ManageLoginPage");
            }
            
        }
        public ActionResult ManageDatatable()
        {
            if (Session["FirstName"] != null)
            {

                return View();
            }
            else
            {
                return Redirect("/LoginForm/ManageLoginPage");
            }
        }
        public ActionResult SearchVaccinationCenter()
        {
            if (Session["FirstName"] != null)
            {

                return View();
            }
            else
            {
                return Redirect("/LoginForm/ManageLoginPage");
            }
        }
        public JsonResult Renderspecialist()
        {
           List<VMSpecialistDoc> vmct = new List<VMSpecialistDoc>();
            try
            {
                vmct = repository.Renderspecialist();
            }
            catch (Exception ex)
            {
                vmct = new List<VMSpecialistDoc>();
            }

            return Json(vmct);
        }
        public JsonResult GetHospital(int SpecialistDocId)
        {
            List<VMHospitals> vmGetHospital = new List<VMHospitals>();
            try
            {
                vmGetHospital = repository.GetHospital(SpecialistDocId);
            }
            catch (Exception ex)
            {
                vmGetHospital = new List<VMHospitals>();
            }
            return Json(vmGetHospital);
        }
        [HttpPost]
        public JsonResult ShowHospitalInfo(int HospitalsId)
        {
           List <VMHospitalInfo> vmHospitalInfo = new List<VMHospitalInfo>();
            try
            {
               vmHospitalInfo = repository.ShowHospitalInfo(HospitalsId);
            }
            catch (Exception ex)
            {
                vmHospitalInfo = new List<VMHospitalInfo>();
            }
            return Json( vmHospitalInfo);
        }
        public JsonResult GetCountries()
        {
            List<VMCountry> vmCountries = new List<VMCountry>();
            try
            {
                vmCountries = repository.GetCountries();
            }
            catch (Exception ex)
            {
                vmCountries = new List<VMCountry>();
            }
            return Json(vmCountries);
        }

        public JsonResult GetStates(int CountryId)
        {
            List<VMstate> vmStateList = new List<VMstate>();
            try
            {
                vmStateList = repository.GetStates(CountryId);
            }
            catch (Exception ex)
            {
                vmStateList = new List<VMstate>();
            }
            return Json(vmStateList);
        }
        public JsonResult GetCity(int StatesId)
        {
            List<VMCity> vmGetHospital = new List<VMCity>();
            try
            {
                vmGetHospital = repository.GetCity(StatesId);
            }
            catch (Exception ex)
            {
                vmGetHospital = new List<VMCity>();
            }
            return Json(vmGetHospital);
        }
        public JsonResult GetLocality(int CityId)
        {
            List<VMLocality> vmGetHospital = new List<VMLocality>();
            try
            {
                vmGetHospital = repository.GetLocality(CityId);
            }
            catch (Exception ex)
            {
                vmGetHospital = new List<VMLocality>();
            }
            return Json(vmGetHospital);
        }
        [HttpPost]
        public JsonResult ShowVaccinationInfo(int LocalityId)
        {
            List<VMVaccination> vmVaccinationInfo = new List<VMVaccination>();
            try
            {
                vmVaccinationInfo = repository.ShowVaccinationInfo(LocalityId);
            }
            catch (Exception ex)
            {
                vmVaccinationInfo = new List<VMVaccination>();
            }
            return Json(vmVaccinationInfo);
        }
    }
}