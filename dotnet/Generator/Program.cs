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
  File.Move(htmlFile, htmlFileBak);
  File.Create(htmlFile);
  StringBuilder sb = new StringBuilder();
  StringReader sr = new StringReader(htmlFileBak);
  while (sr.Peek() > -1)
  {
    var tempStr = sr.ReadLine();
    sb.AppendLine(tempStr);
    if (tempStr?.Trim().Length == htmlMarker.Length && tempStr.Trim() == htmlMarker)
    {
      sb.AppendLine();
      sb.AppendLine("AAAAAAAAAA");
      sb.AppendLine();
    }
  }
  StringWriter sw = new StringWriter(sb);
  sw.Write(sb.ToString());
  sw.Flush();
  //using (var sw = new StreamWriter(htmlFile, 
  //{
  //  sw.Write(sb.ToString());
  //}

}


if (Directory.Exists(dirWork))
{
  files = Directory.GetFiles(dirWork, "*.md");
}

foreach (var f in files)
{
  //System.Console.WriteLine(f);
}


