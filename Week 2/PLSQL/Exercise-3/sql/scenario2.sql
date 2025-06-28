CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    department_id IN NUMBER,
    bonus_percentage IN NUMBER
) IS
BEGIN
    -- Update the salary of employees in the given department by adding bonus percentage
    UPDATE Employees
    SET Salary = Salary + (Salary * bonus_percentage / 100)
    WHERE DepartmentID = department_id;
    
    -- Commit the changes
    COMMIT;
END;
/

-- Execute the procedure (Example: 20% bonus for Department 10)
BEGIN
    UpdateEmployeeBonus(10, 20);
END;
/
