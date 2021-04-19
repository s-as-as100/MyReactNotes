 
import { useEffect } from 'react';
 
 export default function useDocumentTitleCustom(title) {
useEffect(() =>{
    document.title = title;
    
})
}