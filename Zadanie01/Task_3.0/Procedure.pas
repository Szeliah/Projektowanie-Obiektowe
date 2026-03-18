program Generate;
var 
    I: integer;

begin
// initilzie seed
    randomize();
    
    FOR I:=1 to 49 do
        begin
            writeln(random(101));
        end;
        writeln(random(101));
end.