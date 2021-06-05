

function kmp(text, pattern)
{
    function computeKMP(pattern)
    {
        const kmpArray = [];
        kmpArray[0] = 0;

        let len = 0;
        let i = 1;


        while (i < pattern.length)
        {
            if (pattern.charAt(len) === pattern.charAt(i))
            {
                kmpArray[i] = len + 1;
                len++;
                i++;
            }
            else
            {
                if (len === 0)
                {
                    kmpArray[i] = len;
                    i++;
                }
                else
                {
                    len = kmpArray[len - 1];
                }

            }
        }

        return kmpArray;
    }

    const TEXT_LENGTH = text.length;
    const PATTERN_LENGTH = pattern.length;

    if (!TEXT_LENGTH || !PATTERN_LENGTH || TEXT_LENGTH < PATTERN_LENGTH)
        return -1;


    let iText = 0;
    let iPattern = 0;


    const kmpArray = computeKMP(pattern);

    while (iText < TEXT_LENGTH)
    {
        if (iPattern === PATTERN_LENGTH)
        {
            return iText - PATTERN_LENGTH;
        }

        if (text.charAt(iText) === pattern.charAt(iPattern))
        {
            iText++;
            iPattern++;
        }
        else
        {
            if (iPattern !== 0)
            {
                iPattern = kmpArray[iPattern - 1];
            }
            else
            {
                iText++;
            }
        }

    }
    return iPattern === PATTERN_LENGTH ?
        iText - PATTERN_LENGTH :
        - 1;
}





