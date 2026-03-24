import endTaskAlert from '../assets/audios/end-task-alert.mp3';

export function loadBeep(){
  const audio = new Audio(endTaskAlert)
  audio.load();

  // Para burlar o safari
  return () => {
    audio.currentTime = 0;
    audio.play().catch(error => console.log('Erro ao tocar áudio: ', error));
  }
}