module LeapYear (isLeapYear) where

isLeapYear :: Integer -> String
-- isLeapYear year = if even year
--                   then putStrLn "par"
--                   else putStrLn "impar"
-- isLeapYear year 
--   | year > 10 && odd year = "maior que 10 e impar"
--   | year <= 10 && even year = "menor que 4 par "
--   | otherwise = "par"

-- Pattern matching:
isLeapYear 10 = "dez"
isLeapYear 5 = "cinco"
isLeapYear n 
  | even n = "par"
  | otherwise = "impar"