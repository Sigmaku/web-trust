import { SearchField, Select, ListBox } from "@heroui/react"

interface SearchBarangProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  selectedCategory: string
  onCategoryChange: (value: string) => void
  daftarKategori: string[]
}

const SearchBarang = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  daftarKategori,
}: SearchBarangProps) => {
  return (
    <div className="flex flex-row w-full h-20 gap-6 mt-5 items-center">
      {/* Search Bar */}
      <SearchField 
        name="search" 
        className="w-147.5 h-13.5"
        value={searchQuery}
        onChange={(val) => onSearchChange(val)}
      >
        <SearchField.Group className="w-full h-full px-6 py-3.75 rounded-xl border border-primer bg-white">
          <SearchField.Input 
            className="w-full placeholder:font-semibold placeholder:font-sans-poppins placeholder:text-[16px]" 
            placeholder="Cari alat...." 
          />
          <SearchField.ClearButton />
          <SearchField.SearchIcon className="text-primer" />
        </SearchField.Group>
      </SearchField>

      {/* Filter Button */}
      <Select 
        className="w-48 h-11.5" 
        placeholder="Kategori"
        selectedKey={selectedCategory}
        onSelectionChange={(key) => onCategoryChange(String(key))}
      >
        <Select.Trigger className="w-full h-full bg-primer rounded-xl">
          <Select.Value className="w-full h-full text-white text-lg font-semibold font-sans-poppins">
            {selectedCategory === "Kategori" ? "Semua" : selectedCategory}
          </Select.Value>
          <Select.Indicator className="text-white w-7.5 h-7.5" />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            {daftarKategori.map((kategori) => (
              <ListBox.Item id={kategori} key={kategori} textValue={kategori}>
                {kategori}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  )
}

export default SearchBarang