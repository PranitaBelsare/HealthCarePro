using DataContext;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ViewModel;

namespace BusinessRepository
{
  public  class Repository
    {
        #region KratinProject
        KratinProEntities db = new KratinProEntities();
        #region Registration
        public List<VMGender> GetGender()
        {
            List<VMGender> vmGender = new List<VMGender>();
            vmGender = (from G in db.Genders
                             select new VMGender
                             {
                                 GenderId = G.GenderId,
                                 GenderName = G.GenderName

                             }).ToList();

            return vmGender;
        }

        public bool AddUser(VMUserInfo vmUserInfo)
        {
            bool response = false;
            using (DbContextTransaction transaction = db.Database.BeginTransaction())
            {
                try

                {
                    UserInfo AddData = new UserInfo();
                    {
                        AddData.UserInfoId = vmUserInfo.UserInfoId;
                        AddData.FirstName = vmUserInfo.FirstName;
                        AddData.LastName = vmUserInfo.LastName;
                        AddData.DOB = vmUserInfo.DOB;
                        AddData.Email = vmUserInfo.Email;
                        AddData.MobileNO = vmUserInfo.MobileNO;
                        AddData.PassWd = vmUserInfo.PassWd;
                        AddData.GenderId = vmUserInfo.GenderId;
                        db.UserInfoes.Add(AddData);
                        db.SaveChanges();
                        response = true;
                    }
                    
                    transaction.Commit();
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    response = false;
                }
            }
            return response;
        }
        #endregion

        #region Login
        public bool LoginUser(VMUserInfo user)
        {

            bool checklogin = false;
            try
            {
                var result = db.UserInfoes.Where(x => x.FirstName == user.FirstName && x.PassWd == user.PassWd).SingleOrDefault();
                if (result != null)
                {
                    checklogin = true;
                    
                }

            }
            catch (Exception ex)
            {
                checklogin = false;
            }
            return checklogin;
        }

        //public bool CheckEmail(string Email)
        //{
        //    bool Response = false;
        //    try
        //    {
        //        PersonalDetail personal = new PersonalDetail();
        //        personal = db.PersonalDetails.Where(x => x.Email == Email).FirstOrDefault();
        //        Response = true;
        //    }
        //    catch (Exception ex)
        //    {
        //        Response = false;
        //    }
        //    return Response;

        //}
        #endregion

        #region HealthCare
        public List<VMSpecialistDoc> Renderspecialist()
        {
            List<VMSpecialistDoc> vmSpecialistDoc = (from a in db.SpecialistDocs
                                                      select new VMSpecialistDoc
                                                      {
                                                          SpecialistDocId = a.SpecialistDocId,
                                                          Category = a.Category
                                                      }).ToList();

            return vmSpecialistDoc;
        }
        public List<VMHospitals> GetHospital(int SpecialistDocId)
        {
            List<VMHospitals> vmGetHospital = (from s in db.Hospitals
                                               where s.HospitalsId == SpecialistDocId
                                               select new VMHospitals
                                               {
                                                   HospitalsId = s.HospitalsId,
                                                   HospitalsName = s.HospitalsName
                                             }).ToList();
            return vmGetHospital;
        }
       public List<VMHospitalInfo> ShowHospitalInfo(int HospitalsId)
        {
            List<VMHospitalInfo> vmHospitalInfo = (from s in db.HospitalInfoes
                                                 select new VMHospitalInfo
                                                 {
                                                     HospitalInfoId = s.HospitalInfoId,
                                                     MobileNO = s.MobileNO,
                                                     Addresss = s.Addresss,
                                                     DocName = s.DocName,
                                                     Email = s.Email,
                                                     HospitalsId=s.HospitalsId
                                               }).Where(x => x.HospitalsId == HospitalsId).ToList();
        
            return vmHospitalInfo;
        }
        #endregion

        #region GovtScheme
        public VMGenderMarritalStatus GetTables()
        {
            List<VMGender> vmGender = (from g in db.Genders
                                       select new VMGender
                                       {
                                           GenderId = g.GenderId,
                                           GenderName = g.GenderName
                                       }).ToList();
           
            List<VMMarritalStatus> vmHD = (from h in db.MarritalStatus
                                          select new VMMarritalStatus
                                          {
                                              MarritalStatusId = h.MarritalStatusId,
                                              MarritalStatus = h.MarritalStatus
                                          }).ToList();
            VMGenderMarritalStatus Enq = new VMGenderMarritalStatus();
            Enq.Gender = vmGender;
            Enq.MarritalStatus = vmHD;
            return Enq;
        }
        public bool AddUserForScheme(VMNPHCESchme vmUserInfo)
        {
            bool response = false;
            using (DbContextTransaction transaction = db.Database.BeginTransaction())
            {
                try

                {
                    NPHCESchme AddData = new NPHCESchme();
                    {
                        AddData.NPHCESchmeId = vmUserInfo.NPHCESchmeId;
                        AddData.FullName = vmUserInfo.FullName;
                        AddData.MarritalStatusId = vmUserInfo.MarritalStatusId;
                        AddData.GenderId = vmUserInfo.GenderId;
                        AddData.DOB = vmUserInfo.DOB;
                        AddData.BankAccNo = vmUserInfo.BankAccNo;
                        AddData.BankBranch = vmUserInfo.BankBranch;
                        AddData.MobileNo = vmUserInfo.MobileNo;
                        AddData.AadharNo = vmUserInfo.AadharNo;
                        AddData.Email = vmUserInfo.Email;
                        AddData.Age = vmUserInfo.Age;
                        db.NPHCESchmes.Add(AddData);
                        db.SaveChanges();
                        response = true;
                    }

                    transaction.Commit();
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    response = false;
                }
            }
            return response;
        }


        #endregion

        #region vaccination
        public List<VMCountry> GetCountries()
        {
            List<VMCountry> vmCountry = (from s in db.Countries
                                         select new VMCountry
                                         {
                                             CountryId = s.CountryId,
                                             CountryName = s.CountryName
                                         }).ToList();
            return vmCountry;
        }

        public List<VMstate> GetStates(int CountryId)
        {
            List<VMstate> vmStateList = (from s in db.States
                                         where s.CountryId == CountryId
                                               select new VMstate
                                               {
                                                   StatesId = s.StatesId,
                                                   StatesName = s.StatesName
                                               }).ToList();
            return vmStateList;
        }
        
            public List<VMCity> GetCity(int StatesId)
        {
            List<VMCity> vmCityList = (from s in db.Cities
                                         where s.StatesId == StatesId
                                        select new VMCity
                                         {
                                             CityId = s.CityId,
                                             CityName = s.CityName
                                         }).ToList();
            return vmCityList;
        }
        public List<VMLocality> GetLocality(int CityId)
        {
            List<VMLocality> vmLocalityList = (from s in db.Localities
                                        where s.CityId == CityId
                                               select new VMLocality
                                        {
                                            LocalityId = s.LocalityId,
                                            LocalityName = s.LocalityName
                                        }).ToList();
            return vmLocalityList;
        }
        public List<VMVaccination> ShowVaccinationInfo(int LocalityId)
        {
            List<VMVaccination> vmVaccinationInfo = (from s in db.Vaccinations
                                                     join b in db.Localities on s.LocalityId equals b.LocalityId
                                                     join e in db.Cities on s.CityId equals e.CityId
                                                     join p in db.States on s.StatesId equals p.StatesId
                                                     select new VMVaccination
                                                   {
                                                       VaccinationId = s.VaccinationId,
                                                       Adresss=s.Adresss,
                                                       CityId = s.CityId,
                                                       StatesId = s.StatesId,
                                                       LocalityId = s.LocalityId,
                                                   }).Where(x => x.LocalityId == LocalityId).ToList();

            return vmVaccinationInfo;
        }


        #endregion

        #endregion
    }
}
