-- Insert Sample Customers
INSERT INTO Customers (CustomerID, Name, Age, Balance, InterestRate)
VALUES 
    (101, 'Rajesh Kumar', 62, 22500.00, 8.5),
    (102, 'Anita Singh', 55, 8750.00, 9.0),
    (103, 'Vikram Patel', 68, 31200.00, 7.8),
    (104, 'Sunita Joshi', 53, 14800.00, 10.0),
    (105, 'Manoj Agarwal', 59, 8650.00, 9.5);

-- Insert Sample Loans
INSERT INTO Loans (LoanID, CustomerID, DueDate)
VALUES 
    (201, 101, SYSDATE + 10),  -- Due in 10 days
    (202, 102, SYSDATE + 35),
    (203, 103, SYSDATE + 5),
    (204, 104, SYSDATE + 28),
    (205, 105, SYSDATE + 60);  