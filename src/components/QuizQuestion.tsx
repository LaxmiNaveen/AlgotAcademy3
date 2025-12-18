import { useState, useEffect } from "react";
import { Question } from "@/data/examData";
import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle, Lightbulb, FileText, X } from "lucide-react";
import { Link } from "react-router-dom";

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswered: (isCorrect: boolean) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  hasAnswered: boolean;
}

const QuizQuestion = ({ 
  question, 
  questionNumber, 
  totalQuestions,
  onAnswered,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  hasAnswered: externalHasAnswered
}: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(externalHasAnswered);
  const [showPdfPopup, setShowPdfPopup] = useState(false);

  // Show popup after every 10th question
  useEffect(() => {
    if (questionNumber > 0 && questionNumber % 10 === 0 && hasAnswered) {
      setShowPdfPopup(true);
    }
  }, [questionNumber, hasAnswered]);

  const handleOptionClick = (index: number) => {
    if (hasAnswered) return;
    
    setSelectedAnswer(index);
    setHasAnswered(true);
    
    const isCorrect = index === question.correctAnswer;
    onAnswered(isCorrect);
  };

  const getOptionStyles = (index: number) => {
    if (!hasAnswered) {
      return "bg-card border-border hover:border-primary hover:bg-primary/5 cursor-pointer";
    }

    if (index === question.correctAnswer) {
      return "bg-success/10 border-success text-success-foreground animate-pulse-success";
    }

    if (index === selectedAnswer && index !== question.correctAnswer) {
      return "bg-error/10 border-error text-error-foreground animate-shake";
    }

    return "bg-muted/50 border-border opacity-50";
  };

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <div className="animate-fade-in select-none" style={{ userSelect: 'none', WebkitUserSelect: 'none' }} onContextMenu={(e) => e.preventDefault()}>
      {/* PDF Promotion Popup */}
      {showPdfPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-2xl p-6 mx-4 max-w-sm w-full shadow-2xl animate-scale-in">
            <div className="flex justify-end mb-2">
              <button 
                onClick={() => setShowPdfPopup(false)}
                className="p-1 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                📚 Buy PDF for More Questions!
              </h3>
              <p className="text-muted-foreground mb-4 text-justify">
                Get comprehensive PDF with more objective type questions for thorough practice and better preparation.
              </p>
              <Link 
                to="/pdfs"
                onClick={() => setShowPdfPopup(false)}
                className="block w-full py-3 px-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold transition-all duration-200 animate-blink"
              >
                👉 Visit PDFs Section 👈
              </Link>
              <button 
                onClick={() => setShowPdfPopup(false)}
                className="mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Continue Quiz
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-muted-foreground">
          Question {questionNumber} of {totalQuestions}
        </span>
        <div className="flex-1 mx-4 h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300 rounded-full"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-card rounded-xl p-5 shadow-card mb-4">
        <h2 className="text-lg font-semibold text-foreground leading-relaxed text-justify">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={hasAnswered}
            className={cn(
              "w-full p-4 rounded-xl border-2 transition-all duration-300 text-left flex items-start gap-3",
              getOptionStyles(index)
            )}
          >
            <span className={cn(
              "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-sm",
              !hasAnswered && "bg-muted text-muted-foreground",
              hasAnswered && index === question.correctAnswer && "bg-success text-success-foreground",
              hasAnswered && index === selectedAnswer && index !== question.correctAnswer && "bg-error text-error-foreground",
              hasAnswered && index !== selectedAnswer && index !== question.correctAnswer && "bg-muted text-muted-foreground"
            )}>
              {optionLabels[index]}
            </span>
            <span className="flex-1 font-medium text-justify">{option}</span>
            {hasAnswered && index === question.correctAnswer && (
              <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0" />
            )}
            {hasAnswered && index === selectedAnswer && index !== question.correctAnswer && (
              <XCircle className="w-6 h-6 text-error flex-shrink-0" />
            )}
          </button>
        ))}
      </div>

      {/* Explanation */}
      {hasAnswered && (
        <div className="mt-6 animate-slide-up">
          <div className={cn(
            "p-5 rounded-xl border-2",
            selectedAnswer === question.correctAnswer
              ? "bg-success/5 border-success/30"
              : "bg-warning/5 border-warning/30"
          )}>
            <div className="flex items-start gap-3">
              <Lightbulb className={cn(
                "w-5 h-5 flex-shrink-0 mt-0.5",
                selectedAnswer === question.correctAnswer ? "text-success" : "text-warning"
              )} />
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {selectedAnswer === question.correctAnswer ? "Correct! 🎉" : "Explanation"}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  {question.explanation}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="flex-1 h-12 rounded-xl border-2 border-border bg-card text-foreground font-medium transition-all duration-200 hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className="flex-1 h-12 rounded-xl bg-primary text-primary-foreground font-medium transition-all duration-200 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {questionNumber === totalQuestions ? "View Results" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default QuizQuestion;
