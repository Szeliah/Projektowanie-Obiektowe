program Bubble_sort;

type
    TArray = array[0..99] of integer;

var
    arr: TArray;
    i: integer;

procedure sort(var arr: TArray);
var 
    i, j, temp: integer;    

begin
    for i := 0 to 99 do
        for j := i + 1 to 99 do
            if arr[i] > arr[j] then
            begin
                temp := arr[i];
                arr[i] := arr[j];
                arr[j] := temp;
            end;
end;
