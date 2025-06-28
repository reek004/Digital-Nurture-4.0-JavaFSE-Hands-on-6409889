CREATE OR REPLACE PROCEDURE TransferFunds(
    from_acc IN NUMBER,
    to_acc IN NUMBER,
    amount IN NUMBER
) IS
    balance NUMBER;
BEGIN
    -- Check if source account has sufficient balance
    SELECT Balance INTO balance
    FROM Accounts
    WHERE AccountID = from_acc;
    
    -- Verify sufficient funds
    IF balance < amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance for transfer');
    END IF;
    
    -- Deduct amount from source account
    UPDATE Accounts
    SET Balance = Balance - amount
    WHERE AccountID = from_acc;
    
    -- Add amount to destination account
    UPDATE Accounts
    SET Balance = Balance + amount
    WHERE AccountID = to_acc;
    
    -- Commit the changes
    COMMIT;
END;
/

-- Execute the procedure (Example: Transfer 1000 from Account 201 to 205)
BEGIN
    TransferFunds(205, 203, 1000);
END;
/
