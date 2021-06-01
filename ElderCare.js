var ManageElderCarePage = function () {
    var init = function () {
        BindEvent();
        GetTablesForDropdown();
        GetHospitalById();
        //GetHospitalsDetails();
        GetHospitalsDetailsfunction();
        GetCountryDropdown();
        GetStateById();
        GetCityById();
        GetLocalityById();
        GetVaccinationDetailsfunction();
    };
    var BindEvent = function () {
    };
    var GetTablesForDropdown = function () {
        $.ajax({
            url: "/ElderCare/Renderspecialist/",
            type: "POST",
            success: function (data) {
                debugger
                RenderSpecialistForDropdown(data);
            },
            error: function (errResponse) {
                console.log(errResponse);
            }
        });
    };
    var GetHospitalById = function () {
        $("#ddlSpecialist").change(function () {
           // $('#DisplayDatatable').show();
            $.ajax({
                url: "/ElderCare/GetHospital",
                type: "Post",
                data: { SpecialistDocId: $("#ddlSpecialist").val() },
                success: function (data) {
                    RenderHospitalForDropdown(data);
                },
                error: function () {
                }
            });
        });
    };
    var RenderHospitalForDropdown = function (data) {
        var control = $("#ddlHospitals");
        control.empty();
        debugger
        $.each(data, function (i, valueee) {
            control.append($("<option />").val(valueee.HospitalsId).text(valueee.HospitalsName));
        });
        control.prepend($("<option selected='selected' />").val(0).text("Please select "));
    };
    var RenderSpecialistForDropdown = function (data) {
        var control = $("#ddlSpecialist");
        control.empty();
        $.each(data, function (i, valueee) {
            control.append($("<option />").val(valueee.SpecialistDocId).text(valueee.Category));
        });
        control.prepend($("<option selected='selected' />").val(0).text("Please select"));
    };
    var GetHospitalsDetailsfunction = function () {
        $("#ddlHospitals").change(function () {
            $('#DisplayDatatable').show();
            GetHospitalsDetails();
            //var email = document.getElementById("#ddlHospitals");
            //alert(email);
        });
    };
    var GetHospitalsDetails = function () {
        $.ajax({
            url: '/ElderCare/ShowHospitalInfo',
            type: 'post',
            data: { HospitalsId: $("#ddlHospitals").val() },
            dataType:"json",
            success: function (Response) {
                debugger
                var strhtml = '';
                $.each(Response, function (key, value) {
                    strhtml += '<tr>';
                    strhtml += '<td>' + value.DocName + '</td>';
                    strhtml += '<td>' + value.Addresss + '</td>';
                    strhtml += '<td>' + value.MobileNO + '</td>';
                    strhtml += '<td>' + value.Email + '</td>';
                    strhtml += '</tr>';
                });
                $('.getTable').html(strhtml);
                $('#example').DataTable();
            },
            error: function () {
                alert('there is a problem to display details');
            }

        });

    };
    var GetCountryDropdown = function () {
        $.ajax({
            url: "/ElderCare/GetCountries/",
            type: "POST",
            success: function (data) {
                RenderCountryForDropdown(data);
            },
            error: function (errResponse) {
                console.log(errResponse);
            }
        });
    };
    var RenderCountryForDropdown = function (data) {
        var control = $("#ddlCountry");
        control.empty();
        $.each(data, function (i, val) {
            control.append($("<option />").val(val.CountryId).text(val.CountryName));
        }); control.prepend($("<option selected='selected' />").val(0).text("--Please select--"));
    };
    var GetStateById = function () {
        $("#ddlCountry").change(function () {
            // $('#DisplayDatatable').show();
            $.ajax({
                url: "/ElderCare/GetStates",
                type: "Post",
                data: { CountryId: $("#ddlCountry").val() },
                success: function (data) {
                    RenderStateForDropdown(data);
                },
                error: function () {
                }
            });
        });
    };
    var RenderStateForDropdown = function (data) {
        var control = $("#ddlState");
        control.empty();
        debugger
        $.each(data, function (i, valueee) {
            control.append($("<option />").val(valueee.StatesId).text(valueee.StatesName));
        });
        control.prepend($("<option selected='selected' />").val(0).text("--Please select-- "));
    };
    var GetCityById = function () {
        $("#ddlState").change(function () {
            // $('#DisplayDatatable').show();
            $.ajax({
                url: "/ElderCare/GetCity",
                type: "Post",
                data: { StatesId: $("#ddlState").val() },
                success: function (data) {
                    RenderCityForDropdown(data);
                },
                error: function () {
                }
            });
        });
    };
    var RenderCityForDropdown = function (data) {
        var control = $("#ddlCityName");
        control.empty();
        debugger
        $.each(data, function (i, valueee) {
            control.append($("<option />").val(valueee.CityId).text(valueee.CityName));
        });
        control.prepend($("<option selected='selected' />").val(0).text("--Please select-- "));
    };
    var GetLocalityById = function () {
        $("#ddlCityName").change(function () {
            // $('#DisplayDatatable').show();
            $.ajax({
                url: "/ElderCare/GetLocality",
                type: "Post",
                data: { CityId: $("#ddlCityName").val() },
                success: function (data) {
                    RenderLocalityForDropdown(data);
                },
                error: function () {
                }
            });
        });
    };
    var RenderLocalityForDropdown = function (data) {
        var control = $("#ddlLocalityName");
        control.empty();
        debugger
        $.each(data, function (i, valueee) {
            control.append($("<option />").val(valueee.LocalityId).text(valueee.LocalityName));
        });
        control.prepend($("<option selected='selected' />").val(0).text("--Please select-- "));
    };
    var GetVaccinationDetailsfunction = function () {
        $("#ddlLocalityName").change(function () {
            $('#DisplayDatatable2').show();
            GetVaccinationDetails();
        });
    };

    var GetVaccinationDetails = function () {
        $.ajax({
            url: '/ElderCare/ShowVaccinationInfo',
            type: 'post',
            data: { LocalityId: $("#ddlLocalityName").val() },
            dataType: "json",
            success: function (Response) {
                debugger
                var strhtml = '';
                $.each(Response, function (key, value) {
                    strhtml += '<tr>';
                    strhtml += '<td>' + value.Adresss + '</td>';
                    strhtml += '</tr>';
                });
                $('.getTable2').html(strhtml);
                $('#example2').DataTable();
            },
            error: function () {
                alert('there is a problem to display details');
            }

        });

    };
    return {
        Init: init
    };
}();