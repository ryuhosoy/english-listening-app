"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, BookOpen, Volume2 } from "lucide-react";

interface VocabularyViewProps {
  keywords: {
    important_words: Array<{
      word: string;
      meaning: string;
      example: string;
    }>;
    important_phrases: Array<{
      phrase: string;
      meaning: string;
      example: string;
    }>;
  };
}

export function VocabularyView({ keywords }: VocabularyViewProps) {
  const { important_words, important_phrases } = keywords;

  return (
    <div className="space-y-6">
      {/* 重要単語 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-blue-600" />
            重要単語 ({important_words.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {important_words.map((word, index) => (
              <AccordionItem key={index} value={`word-${index}`}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="font-mono">
                      {word.word}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {word.meaning}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">意味</h4>
                      <p className="text-sm">{word.meaning}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">例文</h4>
                      <p className="text-sm italic">"{word.example}"</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                        <Volume2 className="h-3 w-3" />
                        発音を聞く
                      </button>
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                        <BookOpen className="h-3 w-3" />
                        詳細を見る
                      </button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* 重要フレーズ */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-green-600" />
            重要フレーズ ({important_phrases.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {important_phrases.map((phrase, index) => (
              <AccordionItem key={index} value={`phrase-${index}`}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="font-mono">
                      {phrase.phrase}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {phrase.meaning}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 p-4 bg-muted/30 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">意味</h4>
                      <p className="text-sm">{phrase.meaning}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">例文</h4>
                      <p className="text-sm italic">"{phrase.example}"</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                        <Volume2 className="h-3 w-3" />
                        発音を聞く
                      </button>
                      <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary">
                        <BookOpen className="h-3 w-3" />
                        詳細を見る
                      </button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}