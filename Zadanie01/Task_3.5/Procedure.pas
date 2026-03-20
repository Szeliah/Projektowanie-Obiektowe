program Bubble_sort;

type
    TArray = array of integer;

var
    arr: TArray;
    i: integer;

procedure sort(var arr: TArray);
var 
    i, j, temp: integer;    

begin
    for i := 0 to length(arr) - 1 do
        for j := i + 1 to length(arr) - 1 do
            if arr[i] > arr[j] then
            begin
                temp := arr[i];
                arr[i] := arr[j];
                arr[j] := temp;
            end;
end;
