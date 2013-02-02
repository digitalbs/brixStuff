
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, and Azure
-- --------------------------------------------------
-- Date Created: 11/14/2012 21:09:01
-- Generated from EDMX file: D:\Workspace\BrianAndAlix\BrianandAlix.DataLayers\BrianAlixDataModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [BrianandAlix];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_PersonGuests]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Guests] DROP CONSTRAINT [FK_PersonGuests];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[People]', 'U') IS NOT NULL
    DROP TABLE [dbo].[People];
GO
IF OBJECT_ID(N'[dbo].[Guests]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Guests];
GO
IF OBJECT_ID(N'[dbo].[RequestedSongs]', 'U') IS NOT NULL
    DROP TABLE [dbo].[RequestedSongs];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'People'
CREATE TABLE [dbo].[People] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [FirstName] nvarchar(max)  NOT NULL,
    [LastName] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'Guests'
CREATE TABLE [dbo].[Guests] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [IsGuests] bit  NOT NULL,
    [Adults] int  NULL,
    [Children] int  NULL,
    [PersonId] int  NOT NULL
);
GO

-- Creating table 'RequestedSongs'
CREATE TABLE [dbo].[RequestedSongs] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [SongTitle] nvarchar(max)  NOT NULL,
    [Artist] nvarchar(max)  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'People'
ALTER TABLE [dbo].[People]
ADD CONSTRAINT [PK_People]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Guests'
ALTER TABLE [dbo].[Guests]
ADD CONSTRAINT [PK_Guests]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'RequestedSongs'
ALTER TABLE [dbo].[RequestedSongs]
ADD CONSTRAINT [PK_RequestedSongs]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [PersonId] in table 'Guests'
ALTER TABLE [dbo].[Guests]
ADD CONSTRAINT [FK_PersonGuests]
    FOREIGN KEY ([PersonId])
    REFERENCES [dbo].[People]
        ([Id])
    ON DELETE NO ACTION ON UPDATE NO ACTION;

-- Creating non-clustered index for FOREIGN KEY 'FK_PersonGuests'
CREATE INDEX [IX_FK_PersonGuests]
ON [dbo].[Guests]
    ([PersonId]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------