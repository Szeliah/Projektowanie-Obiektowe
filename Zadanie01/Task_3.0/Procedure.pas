program Generate;

type
    TArray = array[0..99] of integer;

var
    arr: TArray;
    i: integer;

function generate(): TArray;
var 
    temp: TArray;
    i: integer;    

begin
    for i := 0 to 99 do
    begin
        temp[i] := random(101);
    end;

    generate := temp;

end;

begin
    randomize();

    arr := generate();

    for i := 0 to 99 do
    begin
        writeln(arr[i]);
    end;
end.