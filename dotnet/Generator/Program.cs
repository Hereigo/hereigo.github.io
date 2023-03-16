// See https://aka.ms/new-console-template for more information
// using System.Text;

internal class Program
{
    const string htmlMarker = "<!--AUTOGENERATOR-->";
    static readonly string dirWork = new DirectoryInfo(Directory.GetCurrentDirectory()).Parent?.Parent?.FullName ?? "";
    static readonly string htmlFile = dirWork + "/index.html";
    static readonly string htmlFileBak = htmlFile + ".bak";
    static string[] filesWithPath = new string[0];

    static void Main(string[] args)
    {
        if (!File.Exists(htmlFile))
        {
            System.Console.WriteLine("Html file Not Exists - " + htmlFile);
        }
        else
        {
            CreateBackup();

            ParsingHtmlFile();

            ParsingMDFolder();
        }
        Console.WriteLine("Done.");
    }

    static void CreateBackup()
    {
        if (File.Exists(htmlFileBak))
        {
            File.Move(htmlFileBak, htmlFileBak + "." + DateTime.Now.ToString("MMDDHHmmss"));
        }

        File.Move(htmlFile, htmlFileBak);

        if (Directory.Exists(dirWork))
        {
            filesWithPath = Directory.GetFiles(dirWork, "*.md");
        }
    }

    static async void ParsingHtmlFile()
    {
        using StreamWriter sw = new(htmlFile);

        foreach (var line in File.ReadLines(htmlFileBak))
        {
            await sw.WriteLineAsync(line);

            if (line.Trim().Length == htmlMarker.Length && line.Trim() == htmlMarker)
            {
                await sw.WriteLineAsync();
                await sw.WriteLineAsync("BBBBBBBBBBBBB");
                await sw.WriteLineAsync();
            }
        }
    }

    static void ParsingMDFolder()
    {
        foreach (var f in filesWithPath)
        {
            //System.Console.WriteLine(f);
        }
    }

}
