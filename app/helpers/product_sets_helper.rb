module ProductSetsHelper
  def balanced_cols(items, rows_count = 10)
    item_cols = items.each_slice(rows_count).to_a

    content_tag :tbody do
      item_cols.first.map.with_index do |_item, row_index|
        concat(
          content_tag(:tr) do
            item_cols[0..item_cols.size].map.with_index do |col, col_index|
              item = col[row_index]
              next unless item.present?

              index = col_index * rows_count + row_index + 1
              yield(item, index)
            end
          end
        )
      end
    end
  end
end
