import { useState } from "react";
import { ArrowLeft, FileText, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PDFTopic {
  code: string;
  subject: string;
  topic: string;
  price: string;
  formUrl: string;
}

const subjects = [
  { code: "ALL", name: "All Subjects" },
  { code: "MAT", name: "Mathematics" },
  { code: "POL", name: "Indian Polity" },
  { code: "HIS", name: "Indian History" },
  { code: "TSH", name: "Telangana History" },
  { code: "GEO", name: "Geography" },
  { code: "ECO", name: "Economy" },
  { code: "SCI", name: "Science" },
  { code: "CA", name: "Current Affairs" },
   { code: "ICT", name: "Computer Knowledge(ICT)" },
];

const pdfTopics: PDFTopic[] = [
   {
    code: "CS-ICT-01",
    subject: "Computer Knowledge(ICT)",
    topic: "Architecture of Computer (No.of Questions 78)- Available @ Just Rs. 7/-",
    price: "₹7",
    formUrl: "https://forms.gle/9Dd8jpEuDwGZsvWL8",
  },
  {
    code: "AA-MAT-01",
    subject: "Mathematics",
    topic: "Algebra (Bank Exams) - Currently Not Available",
    price: "₹10",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSexample-mat01/viewform",
  },
  {
    code: "AA-MAT-02",
    subject: "Mathematics",
    topic: "Mensuration & Geometry - Currently Not Available",
    price: "₹7",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSexample-mat02/viewform",
  },
  {
    code: "AA-POL-01",
    subject: "Indian Polity",
    topic: "Constitution Basics - Currently Not Available",
    price: "₹8",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSexample-pol01/viewform",
  },
  {
    code: "AA-HIS-01",
    subject: "Indian History",
    topic: "Freedom Movement - Currently Not Available",
    price: "7",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSexample-his01/viewform",
  },
  {
    code: "AA-CA-0125",
    subject: "Current Affairs",
    topic: "January 2025 - Currently Not Available",
    price: "₹7",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSexample-ca0125/viewform",
  },
  {
    code: "AA-TSH-01",
    subject: "Telangana History",
    topic: "Telangana Movement - Currently Not Available",
    price: "₹10",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSexample-tsh01/viewform",
  },
  {
    code: "AA-GEO-01",
    subject: "Geography",
    topic: "Indian Geography Basics - Currently Not Available",
    price: "₹101",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSexample-geo01/viewform",
  },
  {
    code: "AA-ECO-01",
    subject: "Economy",
    topic: "Indian Economy Overview - Currently Not Available",
    price: "₹130",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSexample-eco01/viewform",
  },
  {
    code: "AA-SCI-01",
    subject: "Science",
    topic: "General Science - Currently Not Available",
    price: "₹10",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSexample-sci01/viewform",
  },
];

const PDFs = () => {
  const [selectedSubject, setSelectedSubject] = useState("ALL");

  const filteredTopics =
    selectedSubject === "ALL"
      ? pdfTopics
      : pdfTopics.filter((topic) => {
          const subjectMapping: Record<string, string> = {
            MAT: "Mathematics",
            POL: "Indian Polity",
            HIS: "Indian History",
            TSH: "Telangana History",
            GEO: "Geography",
            ECO: "Economy",
            SCI: "Science",
            CA: "Current Affairs",
            ICT: "Computer Knowledge(ICT)",
          };
          return topic.subject === subjectMapping[selectedSubject];
        });

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border px-4 py-3">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <Link to="/" className="p-2 -ml-2 hover:bg-muted rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground flex-1">Study PDFs</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6 max-w-4xl mx-auto">
        {/* Info Banner */}
        <div className="relative overflow-hidden rounded-2xl p-6 mb-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-pink-400/20 animate-pulse"></div>
          <div className="relative z-10 flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div className="text-white">
              <h2 className="text-lg font-bold mb-2">Premium Study Materials</h2>
              <p className="text-sm leading-relaxed opacity-95">
                These study materials are prepared for serious aspirants.
                By contributing <span className="font-bold text-yellow-300">₹10 per topic</span>, you support educational work and orphan children.
              </p>
              <p className="text-sm mt-3 opacity-90 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                PDFs will be sent to your email within 24 hours after verification.
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSexample/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mt-3 text-base font-bold underline text-yellow-300 animate-blink hover:text-yellow-100 transition-colors"
              >
                👉 Click Here to Donate Now 👈
              </a>
            </div>
          </div>
        </div>

        {/* Subject Filter */}
        <div className="mb-6">
          <label className="text-sm font-medium text-foreground mb-2 block">
            Filter by Subject
          </label>
          <Select value={selectedSubject} onValueChange={setSelectedSubject}>
            <SelectTrigger className="w-full max-w-xs">
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent>
              {subjects.map((subject) => (
                <SelectItem key={subject.code} value={subject.code}>
                  {subject.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Get PDF Button - Shows when subject is selected */}
        {selectedSubject !== "ALL" && (
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSexample-bulk/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-6"
          >
            <Button className="w-full h-12 text-base gradient-donate border-0 hover:opacity-90">
              <FileText className="w-5 h-5 mr-2" />
              Get All {subjects.find((s) => s.code === selectedSubject)?.name} PDFs
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        )}

        {/* Subject Codes Reference */}
        <div className="bg-card rounded-xl p-4 border border-border mb-6">
          <h3 className="text-sm font-semibold text-foreground mb-3">Subject Codes</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <span className="text-muted-foreground"><span className="font-medium text-foreground">MAT</span> – Mathematics</span>
            <span className="text-muted-foreground"><span className="font-medium text-foreground">POL</span> – Polity</span>
            <span className="text-muted-foreground"><span className="font-medium text-foreground">HIS</span> – History</span>
            <span className="text-muted-foreground"><span className="font-medium text-foreground">TSH</span> – TS History</span>
            <span className="text-muted-foreground"><span className="font-medium text-foreground">GEO</span> – Geography</span>
            <span className="text-muted-foreground"><span className="font-medium text-foreground">ECO</span> – Economy</span>
            <span className="text-muted-foreground"><span className="font-medium text-foreground">SCI</span> – Science</span>
            <span className="text-muted-foreground"><span className="font-medium text-foreground">CA</span> – Current Affairs</span>
          </div>
        </div>

        {/* PDF Table */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Topic</TableHead>
                  <TableHead className="font-semibold text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTopics.map((topic) => (
                  <TableRow key={topic.code} className="hover:bg-muted/30">
                    <TableCell className="text-sm font-medium">{topic.topic}</TableCell>
                    <TableCell className="text-center">
                      <a href={topic.formUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="h-auto py-2 px-4 text-xs bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 shadow-md hover:shadow-lg transition-all flex flex-col items-center gap-0.5">
                          <span className="flex items-center gap-1">
                            <FileText className="w-3 h-3" />
                            Buy PDF
                          </span>
                          <span className="text-[10px] font-bold text-yellow-200">Rs.200/-</span>
                        </Button>
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {filteredTopics.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No PDFs available for this subject yet.
          </div>
        )}

        <p className="text-center text-xs text-muted-foreground mt-4">
          You will be redirected to a secure form to complete your purchase
        </p>
      </div>
    </div>
  );
};

export default PDFs;
