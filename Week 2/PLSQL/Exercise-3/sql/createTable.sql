-- Accounts Table
CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    AccountHolderName VARCHAR2(100),
    AccountType VARCHAR2(20), -- e.g., 'Savings', 'Current'
    Balance NUMBER(15, 2)
);

-- Employees Table
CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(100),
    DepartmentID NUMBER,
    Salary NUMBER(10, 2)
);