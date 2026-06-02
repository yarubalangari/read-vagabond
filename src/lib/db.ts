// DB disabled for Vercel build

export const getMangaById = async (_mangaId: number) => {
  return null;
};

export const getMangaLibraryCounts = async () => {
  return {
    volumeCount: 0,
    chapterCount: 0,
  };
};

export const getMangaVolumes = async () => {
  return [];
};

export const getMangaVolumeById = async (_volumeId: number) => {
  return null;
};

export const getMangaVolumeByNumber = async (_volumeNumber: number) => {
  return null;
};

export const getMangaChaptersByVolumeId = async (_volumeId: number) => {
  return [];
};

export const getMangaChaptersByVolumeNumber = async (_volumeNumber: number) => {
  return [];
};

export const getMangaChapterById = async (_chapterId: number) => {
  return null;
};

export const getMangaChapterByNumber = async (_chapterNumber: number) => {
  return null;
};
