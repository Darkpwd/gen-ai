'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Copy, Laptop, Hash, FileText } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface HistoryItem {
  id: string
  template: {
    name: string
    icon: string
  }
  response: string
  date: string
  wordCount: number
}

// This would come from your database
const mockHistory: HistoryItem[] = [
  {
    id: '1',
    template: {
      name: 'Write Code',
      icon: '/placeholder.svg?height=40&width=40'
    },
    response: "javascript import React, { useState } from 'react'; function BubbleSort() { const [array, setArray] = useState([5, 1, 4, 2, 8]); const...",
    date: '23/06/2024',
    wordCount: 2321
  },
  {
    id: '2',
    template: {
      name: 'Instagram Hash Tag Generator',
      icon: '/placeholder.svg?height=40&width=40'
    },
    response: "#fitness #gym #workout #gymlife #fitnessmotivation #fitfam #muscle #gains #healthylifestyle #fit #strong #exercise...",
    date: '23/06/2024',
    wordCount: 164
  },
  {
    id: '3',
    template: {
      name: 'Blog Topic Ideas',
      icon: '/placeholder.svg?height=40&width=40'
    },
    response: "- **5 Effective Exercises for a Stronger Core** - **The Ultimate Guide to Building Muscle Mass** - **Nutrition Tips for...",
    date: '23/06/2024',
    wordCount: 228
  },
]

export default function Component() {
  const [copySuccess, setCopySuccess] = useState<string | null>(null)

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopySuccess(id)
      setTimeout(() => setCopySuccess(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">History</CardTitle>
        <p className="text-sm text-muted-foreground">
          Search your previously generated AI content
        </p>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">TEMPLATE</TableHead>
              <TableHead>AI RESP</TableHead>
              <TableHead>DATE</TableHead>
              <TableHead>WORDS</TableHead>
              <TableHead className="w-[100px]">COPY</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockHistory.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 relative flex items-center justify-center rounded bg-muted">
                      {item.template.name === 'Write Code' ? (
                        <Laptop className="w-6 h-6" />
                      ) : item.template.name === 'Instagram Hash Tag Generator' ? (
                        <Hash className="w-6 h-6" />
                      ) : (
                        <FileText className="w-6 h-6" />
                      )}
                    </div>
                    <span className="font-medium">{item.template.name}</span>
                  </div>
                </TableCell>
                <TableCell className="max-w-[400px] truncate">
                  {item.response}
                </TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.wordCount}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy(item.response, item.id)}
                    className="w-20"
                  >
                    {copySuccess === item.id ? (
                      'Copied!'
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </>
                    )}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}