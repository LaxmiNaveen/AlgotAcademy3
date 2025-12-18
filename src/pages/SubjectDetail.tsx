import { ArrowLeft, ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getSubjectById } from "@/data/examData";
import ThemeToggle from "@/components/ThemeToggle";

const SubjectDetail = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjectId ? getSubjectById(subjectId) : null;

  if (!subject) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center pb-20">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-foreground mb-2">Subject not found</h1>
          <Link to="/subjects" className="text-primary hover:underline">
            Browse all subjects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border px-4 py-3">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <Link to="/subjects" className="p-2 -ml-2 hover:bg-muted rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-foreground">{subject.name}</h1>
            <p className="text-xs text-muted-foreground">{subject.subtopics.length} subtopics</p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Subject Info Card */}
      <div className="px-4 py-4 max-w-lg mx-auto">
        <div 
          className="p-4 rounded-xl mb-4"
          style={{ backgroundColor: `${subject.color}15` }}
        >
          <div className="flex items-center gap-3">
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
              style={{ backgroundColor: `${subject.color}25` }}
            >
              {subject.icon}
            </div>
            <div>
              <h2 className="font-semibold text-foreground">{subject.name}</h2>
              <p className="text-sm text-muted-foreground">{subject.questionCount} total questions</p>
            </div>
          </div>
        </div>

        {/* Practice All Button */}
        <Link
          to={`/subjects/${subject.id}/quiz`}
          className="block w-full mb-6"
        >
          <button className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all">
            Practice All Questions
          </button>
        </Link>

        {/* Subtopics */}
        <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
          Choose a Subtopic
        </h3>
        <div className="space-y-3">
          {subject.subtopics.map((subtopic) => (
            <Link
              key={subtopic.id}
              to={`/subjects/${subject.id}/${subtopic.id}/quiz`}
              className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-semibold"
                style={{ backgroundColor: `${subject.color}20`, color: subject.color }}
              >
                {subtopic.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-foreground">{subtopic.name}</h4>
                <p className="text-sm text-muted-foreground">{subtopic.questionCount} questions</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectDetail;
