using System.Text;
// See https://aka.ms/new-console-template for more information
System.Console.WriteLine("");


var htmlMarker = "<!--AUTOGENERATOR-->";
var dirStart = new DirectoryInfo(Directory.GetCurrentDirectory());
var dirWork = dirStart.Parent?.Parent?.ToString();
var htmlFile = dirWork + "/index.html";
var htmlFileBak = htmlFile + ".bak";
var files = new string[0];

if (!File.Exists(htmlFile))
{
    System.Console.WriteLine("File Not Exists - " + htmlFile);
}
else
{
    File.Create(htmlFileBak);

    // File.Move(htmlFile, htmlFileBak);
    // File.Create(htmlFile);

    using (var sw = new StreamWriter(htmlFileBak))
    {
        foreach (var line in File.ReadLines(htmlFile))
        {
            if (line.Trim().Length == htmlMarker.Length && line.Trim() == htmlMarker)
            {
                sw.WriteLine();
                sw.WriteLine("AAAAAAAAAA");
                sw.WriteLine();
            }
        }
    }




    //string line, buffer = null;
    ////StringReader sr = new StringReader
    //
    //int TEST = 0;
    //
    //// https://learn.microsoft.com/ru-ru/dotnet/api/system.io.stringwriter?view=net-7.0
    //
    ////   StringBuilder sb = new StringBuilder();
    //StringReader sr = new StringReader(htmlFile); // BAK !!!!!!!!!!!
    //while (TEST < 4)
    //{
    //  TEST++;
    //  var TEST2 = sr.ReadLine();
    //  System.Console.WriteLine(TEST2);
    //}

    //   while (sr.Peek() > -1)
    //   {
    //     var tempStr = sr.ReadLine();
    //     sb.AppendLine(tempStr);
    //     if (tempStr?.Trim().Length == htmlMarker.Length && tempStr.Trim() == htmlMarker)
    //     {
    //       sb.AppendLine();
    //       sb.AppendLine("AAAAAAAAAA");
    //       sb.AppendLine();
    //     }
    //   }
    //   StringWriter sw = new StringWriter();
    //   sw.Write(sb.ToString());
    //   sw.Flush();
    //   //using (var sw = new StreamWriter(htmlFile, 
    //   //{
    //   //  sw.Write(sb.ToString());
    //   //}

}


if (Directory.Exists(dirWork))
{
    files = Directory.GetFiles(dirWork, "*.md");
}

foreach (var f in files)
{
    //System.Console.WriteLine(f);
}


