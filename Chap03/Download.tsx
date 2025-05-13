import dl_icon from '../img/dl.png';

type DownloadProp = {
  isbn: string;
}

export default function Download({ isbn }: DownloadProp) {
  return (
    <a href={`https://wings.msn.to/index.php/-/A-07/${isbn}/`}>
      <img src={dl_icon} alt="Sample Download" />
    </a>
  );
}