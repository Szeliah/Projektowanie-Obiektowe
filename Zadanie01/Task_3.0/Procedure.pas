program Generate;
var 
    I: integer;

begin
// initilzie seed
    randomize();
    
    FOR I:=1 to 49 do
        begin
            write(random(101));
            write(', ')
        end;
        write(random(101));
        writeln('');
end.