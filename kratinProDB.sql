USE [KratinPro]
GO
/****** Object:  Table [dbo].[City]    Script Date: 01-06-2021 15:45:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[City](
	[CityId] [int] IDENTITY(1,1) NOT NULL,
	[CityName] [nvarchar](64) NOT NULL,
	[StatesId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[CityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Country]    Script Date: 01-06-2021 15:45:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Country](
	[CountryId] [int] IDENTITY(1,1) NOT NULL,
	[CountryName] [nvarchar](64) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[CountryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Gender]    Script Date: 01-06-2021 15:45:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Gender](
	[GenderId] [int] IDENTITY(1,1) NOT NULL,
	[GenderName] [nvarchar](64) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[GenderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[HospitalInfo]    Script Date: 01-06-2021 15:45:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[HospitalInfo](
	[HospitalInfoId] [int] IDENTITY(1,1) NOT NULL,
	[DocName] [nvarchar](50) NOT NULL,
	[Addresss] [varchar](64) NOT NULL,
	[MobileNO] [varchar](64) NOT NULL,
	[SpecialistDocId] [int] NOT NULL,
	[HospitalsId] [int] NOT NULL,
	[Email] [varchar](64) NULL,
PRIMARY KEY CLUSTERED 
(
	[HospitalInfoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Hospitals]    Script Date: 01-06-2021 15:45:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Hospitals](
	[HospitalsId] [int] IDENTITY(1,1) NOT NULL,
	[HospitalsName] [nvarchar](64) NOT NULL,
	[SpecialistDocId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[HospitalsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Locality]    Script Date: 01-06-2021 15:45:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Locality](
	[LocalityId] [int] IDENTITY(1,1) NOT NULL,
	[LocalityName] [nvarchar](64) NOT NULL,
	[CityId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[LocalityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[MarritalStatus]    Script Date: 01-06-2021 15:45:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MarritalStatus](
	[MarritalStatusId] [int] IDENTITY(1,1) NOT NULL,
	[MarritalStatus] [nvarchar](64) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[MarritalStatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[NPHCESchme]    Script Date: 01-06-2021 15:45:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[NPHCESchme](
	[NPHCESchmeId] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [nvarchar](64) NOT NULL,
	[MarritalStatusId] [int] NOT NULL,
	[GenderId] [int] NOT NULL,
	[DOB] [datetime] NOT NULL,
	[BankBranch] [varchar](64) NOT NULL,
	[BankAccNo] [nvarchar](64) NOT NULL,
	[AadharNo] [nvarchar](64) NOT NULL,
	[MobileNo] [varchar](64) NOT NULL,
	[Email] [varchar](64) NULL,
	[Age] [varchar](64) NULL,
PRIMARY KEY CLUSTERED 
(
	[NPHCESchmeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[SpecialistDoc]    Script Date: 01-06-2021 15:45:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SpecialistDoc](
	[SpecialistDocId] [int] IDENTITY(1,1) NOT NULL,
	[Category] [nvarchar](64) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[SpecialistDocId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[States]    Script Date: 01-06-2021 15:45:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[States](
	[StatesId] [int] IDENTITY(1,1) NOT NULL,
	[StatesName] [nvarchar](64) NOT NULL,
	[CountryId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[StatesId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[UserInfo]    Script Date: 01-06-2021 15:45:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[UserInfo](
	[UserInfoId] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](64) NOT NULL,
	[LastName] [varchar](64) NOT NULL,
	[PassWd] [nvarchar](64) NOT NULL,
	[MobileNO] [varchar](64) NOT NULL,
	[Email] [varchar](64) NULL,
	[DOB] [datetime] NOT NULL,
	[GenderId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[UserInfoId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Vaccination]    Script Date: 01-06-2021 15:45:35 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Vaccination](
	[VaccinationId] [int] IDENTITY(1,1) NOT NULL,
	[Adresss] [nvarchar](64) NOT NULL,
	[CityId] [int] NOT NULL,
	[StatesId] [int] NOT NULL,
	[LocalityId] [int] NOT NULL,
	[CountryId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[VaccinationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[City]  WITH CHECK ADD FOREIGN KEY([StatesId])
REFERENCES [dbo].[States] ([StatesId])
GO
ALTER TABLE [dbo].[HospitalInfo]  WITH CHECK ADD FOREIGN KEY([HospitalsId])
REFERENCES [dbo].[Hospitals] ([HospitalsId])
GO
ALTER TABLE [dbo].[HospitalInfo]  WITH CHECK ADD FOREIGN KEY([SpecialistDocId])
REFERENCES [dbo].[SpecialistDoc] ([SpecialistDocId])
GO
ALTER TABLE [dbo].[Hospitals]  WITH CHECK ADD FOREIGN KEY([SpecialistDocId])
REFERENCES [dbo].[SpecialistDoc] ([SpecialistDocId])
GO
ALTER TABLE [dbo].[Locality]  WITH CHECK ADD FOREIGN KEY([CityId])
REFERENCES [dbo].[City] ([CityId])
GO
ALTER TABLE [dbo].[NPHCESchme]  WITH CHECK ADD FOREIGN KEY([GenderId])
REFERENCES [dbo].[Gender] ([GenderId])
GO
ALTER TABLE [dbo].[NPHCESchme]  WITH CHECK ADD FOREIGN KEY([MarritalStatusId])
REFERENCES [dbo].[MarritalStatus] ([MarritalStatusId])
GO
ALTER TABLE [dbo].[States]  WITH CHECK ADD FOREIGN KEY([CountryId])
REFERENCES [dbo].[Country] ([CountryId])
GO
ALTER TABLE [dbo].[UserInfo]  WITH CHECK ADD FOREIGN KEY([GenderId])
REFERENCES [dbo].[Gender] ([GenderId])
GO
ALTER TABLE [dbo].[Vaccination]  WITH CHECK ADD FOREIGN KEY([CityId])
REFERENCES [dbo].[City] ([CityId])
GO
ALTER TABLE [dbo].[Vaccination]  WITH CHECK ADD FOREIGN KEY([CountryId])
REFERENCES [dbo].[Country] ([CountryId])
GO
ALTER TABLE [dbo].[Vaccination]  WITH CHECK ADD FOREIGN KEY([LocalityId])
REFERENCES [dbo].[Locality] ([LocalityId])
GO
ALTER TABLE [dbo].[Vaccination]  WITH CHECK ADD FOREIGN KEY([StatesId])
REFERENCES [dbo].[States] ([StatesId])
GO
