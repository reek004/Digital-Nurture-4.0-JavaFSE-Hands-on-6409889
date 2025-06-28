CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    -- Update the balance of all savings accounts by applying 1% interest
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';
    
    -- Commit the changes
    COMMIT;
END;
/

-- Execute the procedure
BEGIN
    ProcessMonthlyInterest;
END;
/
