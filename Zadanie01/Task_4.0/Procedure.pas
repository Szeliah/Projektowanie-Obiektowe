program Generate_random;

type
    TArray = array of integer;

var
    arr: TArray;
    i: integer;


procedure generate(var arr: TArray; min, max, cnt: integer);
var 
    i: integer;    

begin
    randomize();
    SetLength(arr, cnt);
    for i := 0 to cnt - 1 do
    begin
        arr[i] := random(max - min + 1) + min;
    end;
end;



