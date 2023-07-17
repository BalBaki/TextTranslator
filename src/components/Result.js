import { useSelector } from 'react-redux';
import { useLazyTranslateTextQuery } from '../store';
import { useEffect } from 'react';

export default function Result() {
    const { sourceLanguage, targetLanguage, text } = useSelector(({ source, target }) => {
        return {
            sourceLanguage: source.language,
            targetLanguage: target.language,
            text: source.text,
        };
    });

    const [trigger, { data, isLoading, error }] = useLazyTranslateTextQuery();

    let debounceTimer;

    const debounce = (callback, time) => {
        debounceTimer = setTimeout(callback, time);
    };

    useEffect(() => {
        if (text && sourceLanguage && targetLanguage && sourceLanguage !== targetLanguage) {
            debounce(() => {
                trigger({
                    text,
                    source: sourceLanguage,
                    target: targetLanguage,
                });
            }, 500);
        }

        return () => {
            clearTimeout(debounceTimer);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text, sourceLanguage, targetLanguage]);

    return (
        <div className="border-solid border-2 h-60 w-full mt-1 resize-none p-1 break-words overflow-x-auto bg-slate-200">
            {text && sourceLanguage && targetLanguage ? (
                data?.data?.translations[0]?.translatedText
            ) : (
                <div className="text-3xl font-light">Çeviri</div>
            )}
        </div>
    );
}
