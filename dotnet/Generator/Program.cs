using System.Text;
// See https://aka.ms/new-console-template for more information
System.Console.WriteLine("");


var htmlMarker = "<!--AUTOGENERATOR-->";
var dirStart = new DirectoryInfo(Directory.GetCurrentDirectory());
var dirWork = dirStart.Parent?.Parent?.ToString();
var htmlFile = dirWork + "/index.html";
var htmlFileBak = htmlFile + ".bak";
var filesWithPath = new string[0];

if (!File.Exists(htmlFile))
{
    System.Console.WriteLine("File Not Exists - " + htmlFile);
}
else
{
    File.Move(htmlFile, htmlFileBak);

    if (Directory.Exists(dirWork))
    {
        filesWithPath = Directory.GetFiles(dirWork, "*.md");
    }

    using StreamWriter sw = new(htmlFile);

    foreach (var line in File.ReadLines(htmlFileBak))
    {
        await sw.WriteLineAsync(line);

        if (line.Trim().Length == htmlMarker.Length && line.Trim() == htmlMarker)
        {
            await sw.WriteLineAsync();
            await sw.WriteLineAsync("BBBBBBBBBBBB");
            await sw.WriteLineAsync();
        }
    }
}



foreach (var f in filesWithPath)
{
    //System.Console.WriteLine(f);
}


