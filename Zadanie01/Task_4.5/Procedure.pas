program Unit_tests;

type
    TArray = array of integer;

procedure generateV2(var arr: TArray; min, max, cnt: integer);
var 
    i: integer;    

begin
    SetLength(arr, cnt);
    for i := 0 to cnt - 1 do
    begin
        arr[i] := random(max - min + 1) + min;
    end;
end;

procedure generate(var arr: TArray);
var 
    i: integer;    

begin
    SetLength(arr, 100);
    for i := 0 to 99 do
    begin
        arr[i] := random(101);
    end;
end;

procedure sort(var arr: TArray);
var 
    i, j, temp: integer;
    len: integer;    

begin
    len := length(arr);

    for i := 0 to len - 1 do
        for j := i + 1 to len - 1 do
            if arr[i] > arr[j] then
            begin
                temp := arr[i];
                arr[i] := arr[j];
                arr[j] := temp;
            end;
end;

procedure testSort(arr: TArray);
var
    i: integer;
begin
    for i := 0 to length(arr) - 2 do
    begin
        if arr[i] > arr[i + 1] then 
            begin
                writeln('Test Failed');
                exit;
            end;
    end;
    writeln('Test Passed');
end;

procedure testGenerate(arr: TArray; min, max: integer);
var
  i: integer;
begin
  for i := 0 to length(arr) - 1 do
    if (arr[i] < min) or (arr[i] > max) then
    begin
      writeln('Test Failed');
      exit;
    end;
  writeln('Test Passed');
end;


procedure test1;
var 
    arr: TArray;
begin
    generate(arr);
    testGenerate(arr, 0, 100);
end;

procedure test2;
var
    arr: TArray;
begin
    generateV2(arr, 50, 150, 200);
    testGenerate(arr, 50, 150);
end;

procedure test3;
var
    arr: TArray;
begin
    generateV2(arr, -20, 30, 15);
    testGenerate(arr, -20, 30);
end;

procedure test4;
var
    arr: TArray;
begin
    generateV2(arr, 0, 150, 60);
    sort(arr);
    testSort(arr);
end;

procedure test5;
var
    arr: TArray;
begin
    generateV2(arr, -5, 46, 104);
    sort(arr);
    testSort(arr);
end;


begin
    randomize();
    Test1;
    Test2;
    Test3;
    Test4;
    Test5;
end.