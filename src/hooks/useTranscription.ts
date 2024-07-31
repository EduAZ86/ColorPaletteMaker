// 'use client'
// import { useEffect, useState } from "react";
// import { ISpeechRecognitionHook } from "./types";
// import { TRole } from "@/types/transcribedMessage.interface";
// import { TranscribedMessage } from "@/class/TranscribedMessage.class";
// import { useTranscriptionStore } from "@/zustand/useTranscriptionStore";



// export const useTranscription = (): ISpeechRecognitionHook => {

//     const { currentMessage, error, messages, setCurrentMessage, setError, setMessages } = useTranscriptionStore()

//     const [isListening, setIsListening] = useState(false);
//     const [audioStartTime, setAudioStartTime] = useState<number>(0);

//     let recognition: any = null;
//     let currentRole: TRole = 'agent';
//     if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
//         recognition = new webkitSpeechRecognition();
//         recognition.continuous = true;
//         recognition.lang = 'es-ES';
//         recognition.interimResult = false;
//     }

//     useEffect(() => {

//         recognition.onresult = (event: any) => {
//             const lastResultIndex = event.results.length - 1;
//             const lastResult = event.results[lastResultIndex];
//             const newTranscript: string = lastResult[0].transcript;

//             if (currentMessage !== null) {
//                 const updatedMessage = { ...currentMessage, content: currentMessage.content + newTranscript };
//                 setCurrentMessage(updatedMessage);
//             } else {
//                 const newMessage = new TranscribedMessage({ content: newTranscript, role: currentRole, start: audioStartTime, end: 0 })
//                 setCurrentMessage(newMessage);
//             }
//         };

//         recognition.onstart = () => {
//             setIsListening(true);
//             setAudioStartTime(Date.now());
//         };


//         recognition.onend = () => {
//             setIsListening(false);
//             if (currentMessage !== null) {
//                 const updatedMessage = { ...currentMessage, end: audioStartTime ? Date.now() - audioStartTime : 0 };
//                 setMessages([...messages, updatedMessage]);
//                 setCurrentMessage(null);
//                 setAudioStartTime(0);
//             }
//         };

//         recognition.onerror = (event: any) => {
//             setError(event.error);
//             stopListening();
//         };
//         currentRole = 'user'

//         return () => {
//             stopListening();
//         };
//     }, [currentMessage, messages, audioStartTime]);


//     const startListening = () => {
//         if (!isListening) {
//             setIsListening(true);
//             setMessages([]);
//             setError(null);
//             recognition.start();
//         }
//     };

//     const stopListening = () => {
//         if (isListening) {
//             setIsListening(false);
//             recognition.stop();
//         }
//     };
//     return { startListening, stopListening, messages, isListening, error };

// }